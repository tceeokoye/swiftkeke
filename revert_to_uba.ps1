$srcPath = "c:\Users\HP\OneDrive\Desktop\project2\Personal Projects\swiftkeke\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.tsx","*.css"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $content = $content -replace '#0047FF', '#DE2910'
    $content = $content -replace '#001ECC', '#a8172d'
    $content = $content -replace '#FFB800', '#FDC300'
    $content = $content -replace '#0A0F2E', '#1A1A1A'
    $content = $content -replace '#3D4A6B', '#555555'
    $content = $content -replace '#8892AD', '#888888'
    $content = $content -replace '#F4F7FF', '#F7F7F7'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Updated: $($file.Name)"
}
Write-Host "Done reverting to UBA Red."
