## How did you come across Girls' Last Tour?
I learnt it from [an uploader](https://space.bilibili.com/108745110) of Bilibili who make fanmade-animation of GLT.<br>
<sub>He played *Plague Inc.* before 2020 which attracted me to watch his video.</sub><br>
I love the anime when I watched it for the first time in 2020. But I don't know about the manga.<br>
In spring 2025, I read the manga for the first time. It was a ral shock for me.<br>
I bought the Simplified Chinese version of GLT manga in the summer.<br>
![Bookshelf](https://github.com/user-attachments/assets/adb4f2a4-4fb1-4331-a91d-169629a109bc)
<sub>But it has a bad translation. And "Chito's Diary" in vol.4 was write in Shuumatsu Monji...</sub><br>
<sub>Can't they just use the Taiwan version of translation?</sub><br>

## Why you want to make this project?
> When I surf in the Internet, I came across the Setting Set of the anime, and there's a picture attracted me.<br>
> (From OldREADME.md)<br>

[Somewhere in the internet](https://tieba.baidu.com/p/9221977936) keeps all the things about GLT. I just need to go and find it.<br>
But what about *Lucky Star*? Well...It sucked. But I wouldn't talk it now.

## How do you design these fonts?
My method is to look at what these fonts have in common, figure out what can be used as a template for these fonts, and then open up the whole thing.<br>
The hiragana designs provided in the setting set can indeed be used as clues for katakana, and the lowercase letter designs can also be used as clues for uppercase letters.<br>
Therefore, it is easy to make characters by making changes to the template.<br>
![HowDoIMake](https://github.com/user-attachments/assets/269fa6ba-f5bb-46ea-8df1-4da44f2d6f2a)
I would show you the design process...for katakana and capital letters? I just write whatever comes to mind.<br>
![Draft](https://github.com/user-attachments/assets/70fe14fd-5c32-4a03-bd0c-3ed77cd700ff)
<sub>It actually is my draft book lol</sub>

## 你使用了什么工具？
Adobe Illustrator & FontForge，Ai is used to make the shape of the font and ff is used to generate the font.<br>
I use Gothic onceAs I learnt a method from [this video](https://www.bilibili.com/video/BV1qcWJzoEt2/).(But I don't use it now.)<br>
I also used Adobe Photoshop to make those preview images (but I was so lazy that I didn't leave the source files)<br>

## 你有使用AI吗？
There is, isn't there? Errr... (heartfelt)<br>
I do use AI a little bit, but it's to help me write a program to batch export .ai files to .svg files.<br>
Everything else is "hand rubbed" by me.<br>
If you want, this is the code by AI:<br>
```
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
```
<sub>NOBODY ASKED</sub>

## Who is "HourGLASS" in the last preview image?
It's me, though.<br>
I use other nickname such as `HEART[WAV]E`, `⌈A⌋`, and `HourGLASS` of course.<br>
But more often I use `Semi-Minus` or `SemiMinus`.These two is enough.<br>

## What's your plan after this project finished?
Me? I've got a lot of work to do.<br>
Firstly I had some work for me at my friend's place and then I got myself some work.<br>
None of these jobs are easy, but I'll do my best.<br>
<sub>plz support my friend's project "[Hanoi_raylib](https://github.com/Science-ch/Hanoi_raylib)"</sub>

## Any other words?
This respository was viewed about 200 times in a week. It's not a lot, but thank you all!<br>
<img width="1379" height="1215" alt="GithubView" src="https://github.com/user-attachments/assets/4c17e1f0-3248-486c-91c4-30e27edbebba" />
<hr>
<img width="1920" height="1080" alt="ThankYou" src="https://github.com/user-attachments/assets/9427e747-605e-4ed9-b20e-53fd4b0fa398" />
<hr>
Sincerely,
Semi-Minus"半色" & HourGLASS"砂時計" .
