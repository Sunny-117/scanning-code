import QRCode from 'qrcode'

var segs = [
    { data: 'ABCDEFG', mode: 'alphanumeric' },
    { data: '0123456', mode: 'numeric' }
]

QRCode.toDataURL('https://www.taobao.com/?a=1&b=2', function (err, url) {
    console.log(url)
})


export const ScannerCode = () => {
    return (
        <div>ScannerCode</div>
    )
}
