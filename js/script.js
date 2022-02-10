function func() {
    var xmlhttp = new XMLHttpRequest();
    var org = document.getElementById("orgs").value;
    var a = document.getElementById("num_orgs").value;
    var b = document.getElementById("num_forks").value;
    var url = "https://api.github.com/search/repositories?q=user:" + org + "&sort=forks&per_page=" + a + "&page=1";
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const ul = document.getElementById('list_orgs');
            const list = document.createDocumentFragment();
            var arr = JSON.parse(this.responseText);
            arr = arr.items;
            for (var i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let name = document.createElement('a');
                let desc = document.createElement('span');
                name.innerHTML = arr[i].name;
                name.href = arr[i].html_url;
                desc.innerHTML = arr[i].description;
                li.appendChild(name);
                li.appendChild(desc);
                list.appendChild(li);
            }
            ul.appendChild(list);
        }
    };
    xmlhttp.send();
}