// ========================= Common Functions Start =========================

// ========================= Open Any Modal ========================= 
const openModal = (modalName, className) => {
    let modalBox = document.getElementsByClassName(modalName)[0];
    if (!modalBox.classList.contains(className)) {
        modalBox.classList.add(className);
    }
}

// ========================= CLose Any Modal ========================= 
const closeModal = (modalName, className) => {
    let modalBox = document.getElementsByClassName(modalName)[0];
    if (modalBox.classList.contains(className)) {
        modalBox.classList.remove(className);
    }
}


// ========================= Common Functions End =========================


// ========================= Menus Box Open =========================
let accountMenuIcon = document.getElementById("AccountControls");
accountMenuIcon.addEventListener("click", function () {
    let accountMenusBox = document.getElementsByClassName("menusBox")[0];
    accountMenusBox.classList.toggle("show");
});


// ========================= Menus Box Close =========================
let rightSideBar = document.getElementsByClassName("rightSideBar")[0];
rightSideBar.addEventListener("click", () => { closeModal("menusBox", "show") });



// ========================= Menus Box inside menu click close modal =========================
let menus = document.querySelectorAll(".menu");
for (let index = 0; index < menus.length; index++) {
    menus[index].addEventListener("click", () => { closeModal("menusBox", "show") });
}







// Chat History
let historyContainer = document.getElementsByClassName("history_container")[0];
const history = ["Technology and Security", "Change Scrollbar Background", "Word-Meaning Dictionary Creation", "Python Django User Auth", "String methods summary", "News Application Project", "SQL Keys", "useNavigate Error in React", "PHP Quiz App", "Dimensions of Letter Paper", "Common Programming Concepts.", "PHP Stack Implementation.", "Laravel Image Upload", "Check Data Save Success", "Connect React-Django.", "Python class definition.", "React Signup Form", "Express Route CRUD.", "Identify Dilip Chau", "Show Laravel form errors.", "AI's Language Capabilities", "Django and Firebase Integration.", "Sorted Sequence for Non-Sequences.", "MySQLdb module not found.", "ASP.NET Session Clearing.", "ASP.NET calendar using for loop.", "ASP.NET dropdown from database.", "Resume in Python.", "Create Python compiler.", "Node MongoDB Connection", "Django data insert without AJAX.", "Create file using CMD.", "Painting contract timeline.", "Move git commit.", "Get Weather Data Django", "Android: Sidebar navigation menu", "Djongo Column Drop Error.", "Get BookID, Set Textbox.", "Dev Server Config Errors", "Troubleshooting ASP.NET Errors", "Connecting Express to MongoDB", "Logout confirmation dialog.", "Change Focus Icon jQuery.", "Android multiline EditText.", "Django student PATCH view.", "Set default fragment.", "Firebase Connection Check.", "Change Activity Code.", "Task Manager Menu Options.", "Django Login/Logout REST API", "Set Linear Background.", "CMD basic commands.", "Sunrise and sunset retrieval.", "Creating Custom Django Module"];


for (let index = 0; index < history.length; index++) {
    historyContainer.insertAdjacentHTML("beforeend", `<div class="box">
                    <div class="icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div class="content_controls">
                        <div class="content">
                            <p>
                                ${history[index]
        }
                            </p>
                        </div>
                        <div class="controls">
                            <button class="edit" type="button">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            </button>
                            <button class="delete" type="button">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                        </div>
                    </div>
                </div>`);
}


// User Question And ANswer
let userQuestionAnswer = document.getElementsByClassName("messages")[0];
let QuestionAnswer =
    `<div class="boxCode">
                    <div class="questionPanel">
                        <div class="box">
                            <div class="userLogo">
                                <div class="image">
                                    <img src="images/avater.png" alt="avater image">
                                </div>
                            </div>
                            <div class="question_controls">
                                <div class="question">
                                    <p>how to set padding in svg</p>
                                </div>
                                <div class="control">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="answerPanel">
                        <div class="box">
                            <div class="gptLogo">
                                <div class="image">
                                    <img src="images/chatgpt.svg" alt="avater image">
                                </div>
                            </div>
                            <div class="answer_controls">
                                <div class="answer">
                                    <p>In SVG, you cannot directly apply padding like you would in HTML or CSS. However, you can achieve a similar effect by adjusting the size and position of the SVG elements. <br>Here's an example of how you can create padding in an SVG using a <code><rect></code> element:</p>
                                </div>
                                <div class="control">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;


for (let index = 0; index < 100; index++) {
    userQuestionAnswer.insertAdjacentHTML("beforeend", QuestionAnswer);
}


// new chat button
let newChatBtn = document.getElementsByClassName("newChatBtn")[0];
newChatBtn.addEventListener("click", () => {
    let checkShowClass = document.getElementsByClassName("introPage")[0].classList.contains("show");
    if (!checkShowClass) {
        document.getElementsByClassName("introPage")[0].classList.add("show");
    }

    if(mobileBtn.classList.contains("hide")){
        mobileBtn.classList.remove("hide");
    }

    if(leftSidebar.classList.contains("active")){
        leftSidebar.classList.remove("active");
    }
});



// ========================= Setting Modal Open ========================= 
let settingMenuBtn = document.getElementsByClassName("settings")[0];
settingMenuBtn.addEventListener("click", () => {
    openModal("settings_modal", "active");
});

// ========================= Settings Modal Close ========================= 
let settingModelCloseIcon = document.getElementsByClassName("settings_close_icon")[0];
settingModelCloseIcon.addEventListener("click", () => {
    closeModal("settings_modal", "active");
});


// ========================= Logout Modal Open ========================= 
let logoutMenuBtn = document.getElementsByClassName("logout")[0];
logoutMenuBtn.addEventListener("click", () => {
    openModal("logout_modal", "active");
});


// ========================= Logout Modal Close ========================= 
let logoutModelIcons = document.getElementsByClassName("logout_close_icon")[0];
logoutModelIcons.addEventListener("click", () => {
    closeModal("logout_modal", "active");
});

let logoutModalButton = document.getElementsByClassName("logout_close_button")[0];
logoutModalButton.addEventListener("click", () => {
    closeModal("logout_modal", "active");
});


// ========================= Settings Models Inside =========================
let settingsMenu = document.getElementsByClassName("settingMenu");
for (let index = 0; index < settingsMenu.length; index++) {
    settingsMenu[index].addEventListener("click", () => {
        if (!settingsMenu[index].classList.contains('active')) {
            let setting_menus = Array.from(settingsMenu);
            setting_menus.forEach((setting_menus) => {
                setting_menus.classList.remove('active');
            })
        }
        settingsMenu[index].classList.add('active');

        // target container show and hide panels
        let targetPanel = document.getElementById(settingsMenu[index].getAttribute("data-target"));
        let setting_panel = Array.from(document.getElementsByClassName("settingPanel"));
        setting_panel.forEach((setting_panel) => {
            setting_panel.classList.remove('active');
        })
        targetPanel.classList.add('active');
    })
}


// ========================= Left Sidebar Open =========================
let mobileBtn = document.getElementsByClassName("mobileNavBtn")[0];
let leftSidebar = document.getElementsByClassName("leftNavbar")[0];
mobileBtn.addEventListener("click", ()=>{
    if(!mobileBtn.classList.contains("hide")){
        mobileBtn.classList.add("hide");
    }
    
    if(!leftSidebar.classList.contains("active")){
        leftSidebar.classList.add("active");
    }
});

// ========================= Left Sidebar Close =========================
let navbarCloseBtn = document.getElementsByClassName("navbarClose")[0];
navbarCloseBtn.addEventListener("click", () => {
    if(mobileBtn.classList.contains("hide")){
        mobileBtn.classList.remove("hide");
    }

    if(leftSidebar.classList.contains("active")){
        leftSidebar.classList.remove("active");
    }
})



window.addEventListener("click", (event) => {
    let outSideModal = document.getElementsByClassName("mainModal active")[0];
    if (event.target === outSideModal){
        closeModal(outSideModal.classList[0].toString(), "active");
    }
});
