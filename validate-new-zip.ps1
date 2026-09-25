Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('x-sites-assets-1.zip')
$files = @(
  "x-sites-assets/assets/icons/icon-servico-1.svg",
  "x-sites-assets/assets/icons/icon-servico-2.svg",
  "x-sites-assets/assets/icons/icon-servico-3.svg",
  "x-sites-assets/assets/icons/icon-diferencial-preco.svg",
  "x-sites-assets/assets/icons/icon-diferencial-velocidade.svg",
  "x-sites-assets/assets/icons/icon-diferencial-whatsapp.svg",
  "x-sites-assets/assets/icons/icon-diferencial-suporte.svg",
  "x-sites-assets/assets/icons/icon-processo-1.svg",
  "x-sites-assets/assets/icons/icon-processo-2.svg",
  "x-sites-assets/assets/icons/icon-processo-3.svg",
  "x-sites-assets/assets/icons/icon-processo-4.svg",
  "x-sites-assets/assets/logo.svg",
  "x-sites-assets/assets/logo-white.svg"
)
foreach ($name in $files) {
  $entry = $zip.GetEntry($name)
  if ($entry) {
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $content = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    Write-Host "=== $name === (Length: $($entry.Length) bytes)"
    Write-Host $content
    Write-Host ""
  } else {
    Write-Host "=== $name NOT FOUND ==="
  }
}
# Check WebP files
$webpFiles = @(
  "x-sites-assets/assets/images/mockup-clinica.webp",
  "x-sites-assets/assets/images/mockup-loja.webp"
)
foreach ($name in $webpFiles) {
  $entry = $zip.GetEntry($name)
  if ($entry) {
    $stream = $entry.Open()
    $bytes = New-Object byte[] 20
    $stream.Read($bytes, 0, 20)
    $stream.Close()
    $header = [System.Text.Encoding]::ASCII.GetString($bytes)
    Write-Host "=== $name === (Length: $($entry.Length) bytes)"
    Write-Host "Header: $header"
    Write-Host ""
  } else {
    Write-Host "=== $name NOT FOUND ==="
  }
}
$zip.Dispose()