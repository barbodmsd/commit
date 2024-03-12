import React from 'react'

export default function Calculator() {
  return (
    <div>
        <form >
            <input type="text" />
            <input type="text" />
            <select>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <button type="submit"></button>
        </form>
    </div>
  )
}
