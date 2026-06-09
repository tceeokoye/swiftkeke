$srcPath = "c:\Users\HP\OneDrive\Desktop\project2\Personal Projects\swiftkeke\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.tsx","*.css"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $content = $content -replace '#DE2910', '#0047FF'
    $content = $content -replace '#a8172d', '#001ECC'
    $content = $content -replace '#FDC300', '#FFB800'
    $content = $content -replace '#fdc300', '#FFB800'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Updated: $($file.Name)"
}
Write-Host "Done."
