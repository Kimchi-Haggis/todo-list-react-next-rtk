import clsx from 'clsx'
import React from 'react'

type SectionBoxProps = {
    readonly children?: React.ReactNode;
    readonly className: React.ReactNode;
}

const SectionBox = (props: SectionBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('box-section', className)}>
        {children}
    </div>
  )
}

export default SectionBox;