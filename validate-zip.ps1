Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('x-sites-assets.zip')
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
  "x-sites-assets/assets/logo-white.svg",
  "x-sites-assets/assets/images/mockup-clinica.png",
  "x-sites-assets/assets/images/mockup-loja.png"
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
$zip.Dispose()