element = document.createElement("div")
element.innerHTML = (`
<div class="flex w-screen h-[5%] bg-gray-900 gap-x-3 items-center px-2">
            <img class="w-[35px] h-auto" src=${logo}/>
            <a class="text-xl relative underline-animation hover:no-underline text-nowrap" href='/g'>GAMES</a>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">APPS</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">EMULATORS</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">PROXIES</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">CHEATS</p>
            <button class="text-xl relative underline-animation hover:no-underline text-nowrap" onclick='openInAboutBlank()'>OPEN BLANK</button>
            <div class="flex justify-end w-full items-end">
                <a class="w-[40px] h-auto" href="https://github.com/FarmzDev/pratal-unblocker">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                </a>
            </div>
        </div>`)
document.body.insertBefore(element, document.body.firstChild)
function openInAboutBlank() {
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    html = `
    <style>*{margin:0;padding:0;border:none}body,iframe{height:100vh;width:100vw}iframe{height:100vh}header{display:flex;height:4vh;justify-content:center;}</style><script>
    </script><iframe id=content></iframe>`;
    win.document.querySelector("html").innerHTML = html;
    win.eval(`let content = document.getElementById("content");console.log(content);content.setAttribute("src", "${location.href}");console.log(content);`);
    location.href = "https://google.com";
    close();
}

var clients = {"Eaglercraft 1.8.8": {
    "u27": "eagler_1.8.8_u27", 
    "u26": "eagler_1.8.8_u26",
    "u25": "eagler_1.8.8_u25",
    "u24": "eagler_1.8.8_u24",
    "u23": "eagler_1.8.8_u23",
    "u22": "eagler_1.8.8_u22",
}}

function enterEaglerClient(client, version) {
    versions = clients[client]
    version = versions[version]
    window.location = (location.origin + "/clients/" + version + "/index.html")
}