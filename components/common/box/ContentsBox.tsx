import React from 'react'
import clsx from "clsx";

type ContentsBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ContentsBox = (props: ContentsBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('box-contents', className)}>
        {children}
    </div>
  )
}

export default ContentsBox;
