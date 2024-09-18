import React from 'react'
import { ErrorBlock, Space } from 'antd-mobile'

export default () => {
  return (
    <>
        <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='empty' />
        </Space>
    </>
  )
}