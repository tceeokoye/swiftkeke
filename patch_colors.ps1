$srcPath = "c:\Users\HP\OneDrive\Desktop\project2\Personal Projects\swiftkeke\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.tsx"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    # Fix text-white headings in RegistrationForm steps (now on light bg)
    $content = $content -replace 'text-xl font-bold text-white flex items-center gap-2">', 'text-xl font-bold text-[#0A0F2E] flex items-center gap-2">'
    $content = $content -replace 'text-xl font-bold text-white flex items-center gap-2 mb-6">', 'text-xl font-bold text-[#0A0F2E] flex items-center gap-2 mb-6">'
    # Fix review row value text-white
    $content = $content -replace '"text-sm text-white font-medium text-right max-w-\[60%\] truncate"', '"text-sm text-[#0A0F2E] font-medium text-right max-w-[60%] truncate"'
    # Fix FileUploadBox label text-white
    $content = $content -replace '"text-sm font-semibold text-white">{label}', '"text-sm font-semibold text-[#0A0F2E]">{label}'
    # Update alternating light bg from F7F7F7 to F4F7FF (blue-tinted)
    $content = $content -replace '#F7F7F7', '#F4F7FF'
    # Update text color vars
    $content = $content -replace '\[#1A1A1A\]', '[#0A0F2E]'
    $content = $content -replace '\[#555555\]', '[#3D4A6B]'
    $content = $content -replace '\[#888888\]', '[#8892AD]'
    $content = $content -replace '\[#BBBBBB\]', '[#A0ADCC]'
    $content = $content -replace '\[#AAAAAA\]', '[#8892AD]'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Patched: $($file.Name)"
}
Write-Host "All done."
