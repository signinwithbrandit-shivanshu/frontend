import { useEffect, useMemo, useRef, useState } from 'react'
import { productById, searchProducts } from '../data/catalog.js'

export default function ProductPicker({ selected, onChange }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const boxRef = useRef(null)
  const inputRef = useRef(null)

  const selectedIds = useMemo(() => new Set(selected.map((item) => item.id)), [selected])

  const suggestions = useMemo(() => {
    const matches = (query.trim() ? searchProducts(query) : []).filter(
      (item) => !selectedIds.has(item.id),
    )
    return matches.slice(0, 8)
  }, [query, selectedIds])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    function onPointerDown(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  function add(product) {
    if (!product || selectedIds.has(product.id)) return
    onChange([...selected, product])
    setQuery('')
    setOpen(false)
    inputRef.current?.focus()
  }

  function remove(id) {
    onChange(selected.filter((item) => item.id !== id))
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActive((i) => Math.min(i + 1, Math.max(suggestions.length - 1, 0)))
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
      return
    }
    if (event.key === 'Enter') {
      if (open && suggestions[active]) {
        event.preventDefault()
        add(suggestions[active])
      }
      return
    }
    if (event.key === 'Escape') {
      setOpen(false)
    }
    if (event.key === 'Backspace' && !query && selected.length) {
      remove(selected[selected.length - 1].id)
    }
  }

  return (
    <div className="picker" ref={boxRef}>
      {selected.length ? (
        <ul className="picker-chips">
          {selected.map((item) => (
            <li key={item.id}>
              <span className="num">{item.id}</span>
              <span>{item.name}</span>
              <button type="button" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}>
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="picker-field">
        <input
          ref={inputRef}
          type="search"
          autoComplete="off"
          placeholder="Type a product name or ID, then pick from the list"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />

        {open && query.trim() ? (
          <ul className="picker-list" role="listbox">
            {suggestions.length ? (
              suggestions.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={index === active ? 'active' : ''}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => add(item)}
                  >
                    <span className="num">{item.id}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))
            ) : (
              <li className="picker-empty">No matching products</li>
            )}
          </ul>
        ) : null}
      </div>

      <p className="picker-hint">Type a name or ID.</p>
    </div>
  )
}

export function productsFromParam(value) {
  if (!value) return []
  return value
    .split(',')
    .map((id) => productById(id.trim()))
    .filter(Boolean)
}
