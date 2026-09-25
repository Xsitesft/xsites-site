Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('x-sites-assets-1.zip')
$zip.Entries | Select-Object FullName, Length, CompressedLength
$zip.Dispose()