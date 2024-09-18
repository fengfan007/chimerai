import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
export default function ErrorPage() {

  return (
    <ConfigProvider locale={zhCN}>
        <ErrorBlock status='disconnected' />
    </ConfigProvider>
  );
}