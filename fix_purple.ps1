$file = "src\components\RegistrationForm.tsx"
$c = Get-Content -Path $file -Raw -Encoding UTF8
$c = $c -replace 'text-purple-400', 'text-[#0047FF]'
$c = $c -replace 'text-purple-300', 'text-[#3D72FF]'
$c = $c -replace 'bg-purple-700/10 border border-purple-600/20', 'bg-[#0047FF]/8 border border-[#0047FF]/20'
Set-Content -Path $file -Value $c -Encoding UTF8 -NoNewline
Write-Host "Done"
