Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('web-assets-xsites.zip')
foreach ($entry in $zip.Entries) {
  if ($entry.FullName -match '(style-guide|instrucoes-secoes|icones-especificacoes|logotipo-especificacoes|README\.md)$') {
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $content = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    Write-Host "=== $($entry.FullName) ==="
    Write-Host $content
    Write-Host ""
  }
}
$zip.Close()