import Link from 'next/link'
import React from 'react'
import styles from './index.module.scss'

export interface IBreadcrumbsProps {
  breadcrumbs: { label: string; url: string }[]
}

export const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbsProps) => {
  return (
    <div className={styles.wrapper}>
      {breadcrumbs.map(({ label, url }, idx) => {
        const isLastBreadcrumb = idx === breadcrumbs.length - 1

        return (
          <span key={url}>
            {isLastBreadcrumb ? (
              <span className={styles.label}>{label}</span>
            ) : (
              <Link href={url} className={styles.label}>
                {label}
                {!isLastBreadcrumb && ' / '}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}
