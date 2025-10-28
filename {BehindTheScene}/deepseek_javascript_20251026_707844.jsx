main();
function main() {
    var folder = Folder.selectDialog('Select folder');
    if (!(folder instanceof Folder)) return;
    var files = get_ai_files(folder, []);
    if (files.length == 0) {
        alert('The folder contains no AI files');
        return;
    }
    for (var i = 0; i < files.length; i++) {
        var doc = app.open(files[i]);
        var file = File(doc.fullName.fsName.replace(/\.ai$/i, '.svg'));
        doc.exportFile(file, ExportType.SVG);
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }
    alert('Number of saved SVG files: ' + files.length);
}
function get_ai_files(folder, files_array) {
    var files = folder.getFiles('*');
    if (files.length == 0) return files_array;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (/.+\.ai$/i.test(file.name)) files_array.push(file);
        if (file instanceof Folder) files_array.concat(get_ai_files(file, files_array));
    }
    return files_array;
}