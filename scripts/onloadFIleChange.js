export default function onloadFileChange(){
    let input = document.getElementById("file");

    document.getElementById('file').onchange = () => {
        let file_name = '' + input.files[0].name;
        let file_name_iteration = 0;
        let file_name_showed = '';
        let file_format = file_name.lastIndexOf('.');
        for (; file_name_iteration < file_name.length; file_name_iteration++) {
            if (file_name_iteration > file_format) {
                file_name_showed += '' + file_name[file_name_iteration];
            }
            else {
                if (file_name_iteration < 20 && file_name_iteration != '.') {
                    file_name_showed += '' + file_name[file_name_iteration];
                    if (file_name_iteration == 19) {
                        file_name_showed += '...~.';
                    }
                }
            }
        }
        document.querySelector('.card_upload__content').style.transform = 'translateX(-150px)';
        document.styleSheets[0].addRule('button.upload_btn:before', 'content: "' + file_name_showed + '"; background: rgb(40, 40, 40);padding-bottom:1px; color: white; font-size: 15px');
        document.styleSheets[0].addRule('button.upload_btn:after', 'content: "обрано:";border-bottom:1px solid #000; padding-bottom:5px; background: rgb(83, 83, 83);');

        let file_inside_zone = document.createElement('div');
        file_inside_zone.classList.add('file_inside_zone');
        document.querySelector('.card_upload__content').appendChild(file_inside_zone);

        let file_inside_header = document.createElement('h2');
        file_inside_header.innerHTML = 'вміст файлу:';
        file_inside_zone.appendChild(file_inside_header);


        let file_inside_output = document.createElement('textarea');
        file_inside_output.readOnly = true;
        file_inside_zone.appendChild(file_inside_output);

        let file = input.files[0];

        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            file_inside_output.textContent = reader.result;
        };

        reader.onerror = function () {
            console.log(reader.error);
        };
    };
}