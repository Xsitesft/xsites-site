Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('web-assets-xsites.zip')
$entries = @("web-assets-xsites/style-guide.txt", "web-assets-xsites/instrucoes-secoes.txt", "web-assets-xsites/icones-especificacoes.txt", "web-assets-xsites/logotipo-especificacoes.txt")
foreach ($name in $entries) {
  $entry = $zip.GetEntry($name)
  if ($entry) {
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $content = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    Write-Host "=== $name ==="
    Write-Host $content
    Write-Host ""
  } else {
    Write-Host "=== $name NOT FOUND ==="
  }
}
$zip.Dispose()