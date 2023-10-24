import React from 'react'
import Link from 'next/link'

type Props = {}

export default function CountriesNav({}: Props) {
  return (
    <div>
      {' '}
    <nav className="sticky top-0 flex flex-row justify-center bg-gray-800 text-white p-4 text-center">
        <ul className="flex flex-row space-x-4 justify-center">
          <li>
            <Link href="/us">US</Link>
          </li>
          <li>
            <Link href="/canada">Canada</Link>
          </li>
            <li>
                <Link href="/jamaica">Jamaica</Link>
            </li>
          <li>
            <Link href="/us">Headlines</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}