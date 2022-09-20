import QRCode from 'qrcode'

var segs = [
    { data: 'ABCDEFG', mode: 'alphanumeric' },
    { data: '0123456', mode: 'numeric' }
]

QRCode.toDataURL(segs, function (err, url) {
    QRCode.toString(url, function (err, string) {
        if (err) throw err
        console.log(string)
    })
})


export const ScannerCode = () => {
    return (
        <div>ScannerCode</div>
    )
}
