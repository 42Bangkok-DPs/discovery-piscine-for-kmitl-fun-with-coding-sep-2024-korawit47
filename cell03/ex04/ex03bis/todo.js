$(document).ready(() => {
    let ft_list = $("#ft_list");
  
    function loadTasks() {
        const cookies = document.cookie.split("; ");
        cookies.forEach((cookie) => {
            let [name, value] = cookie.split("=");
            if (value) {
                let list = $("<div></div>").text(decodeURIComponent(value)).addClass("todo");
                list.click(() => {
                    const check = confirm("Do you want to delete");
                    if (check) {
                        list.remove();
                        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
                    }
                });
                ft_list.prepend(list);
            }
        });
    }
  
    loadTasks();
  
    $("#create").click(() => {
        let txt = prompt("Please Enter TODO LIST :");
        if (txt) {
            const name = new Date().getTime();
            document.cookie = `${name}=${encodeURIComponent(txt)}; path=/`;
            let list = $("<div></div>").text(txt).addClass("todo");
            list.click(() => {
                const check = confirm("Do you want to delete");
                if (check) {
                    list.remove();
                    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
                }
            });
            ft_list.prepend(list);
        }
    });
  });
  