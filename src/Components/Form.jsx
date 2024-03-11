import React from 'react'

export default function Form({}) {
  return (
    <form>
        <input type="text" />
        <input type="text" />
        <select>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>
        <button type='submit'>Enter</button>
    </form>
  )
}
