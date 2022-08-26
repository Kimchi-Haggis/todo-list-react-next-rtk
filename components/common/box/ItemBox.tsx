import React from 'react'
import clsx from "clsx";

type ItemBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
  readonly boxType: 'box-item-head' |'box-item-col2' | 'box-item-col3' | 'box-item-col4';
}

const ItemBox = (props: ItemBoxProps) => {
    const { children, className, boxType } = props
  return (
    <div className={clsx(boxType, 'box-item', className)}>
        {children}
    </div>
  )
}

export default ItemBox;