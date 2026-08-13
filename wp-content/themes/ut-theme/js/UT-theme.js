//---------
//UT-theme.js
//---------

//Top Bar Name
//addTopBarLogo();//Add name to top bar

//Logo vs Title
if(document.getElementsByClassName("top-logo").length == 0)//If there are no elements with class "top-logo":
	addTitleAndTagline();//Display the site title and tagline

//Primary Menu Alignment
var primaryMenus = document.getElementsByClassName("menu-primary");
if(primaryMenus.length > 0){//If there is a primary menu:
	if(primaryMenus[0].children.length < 4){//And that primary menu has <3 items:
		leftAlignPrimaryMenu(primaryMenus[0]);//Left align primary menu
	}
}

/*------------------------------------
Add linked logo to top bar - Not currently using this
------------------------------------
function addTopBarLogo(){
	//Image
	var logo = document.createElement('img');//Create an object of type <img>
	logo.alt  = its_ut_theme_top_bar_js_setting.alt; // localized by WP
	logo.src  = its_ut_theme_top_bar_js_setting.src; // localized by WP
	logo.id = "top-bar-name";
		//Add inline css styling
	logo.style.height = "28px";
	logo.style.position = "relative";
	logo.style.top = "-41px";

	//Link
	var link = document.createElement('a');//Create an object of type <a>
	link.appendChild(logo);//Wrap the logo created above in the link we just created by adding logo as a child
	link.href = its_ut_theme_top_bar_js_setting.href; // localized by WP

	//Top Bar
	var topBar = document.getElementsByClassName("wrap")[0];//Get first element with class "wrap" (which will be the top bar)
	topBar.insertBefore(link, topBar.childNodes[0]);//Add the linked logo we just added to the top bar (as the new first child)
} */

/*------------------------------------
Displays site title and description
------------------------------------*/
function addTitleAndTagline(){
	//---------Site Title
	var titles = document.getElementsByClassName("site-title");//Get all elements with class name "site-title"
	for(var i=0; i<titles.length; i++)//For each element with class name "site-title" do the following:
		titles[i].style.display = "block";//Add inline css "display:block;" (as opposed to "display:none;")

	//---------Site Description
	var descriptions = document.getElementsByClassName("site-description");//Get all elements with class name "site-description"
	for(var i=0; i<descriptions.length; i++)//For each element with class name "site-description" do the following:
		descriptions[i].style.display = "block";//Add inline css "display:block;" (as opposed to "display:none;")
}


/*------------------------------------
Left aligns primary menu
------------------------------------*/
function leftAlignPrimaryMenu(menu){
	//---------Left align menu
	menu.style.display = "block";//Add inline css "display:block;" to menu passed in

	//---------Add spacing between menu items
	for(var i=0; i<menu.children.length; i++){//For each child of menu passed in:
		menu.children[i].style.marginRight = "30px";//Add inline css "margin-right:30px;"
	}
	window.addEventListener("resize", myFunction);
}

/*------------------------------------
Vertically centers responsive menu title
------------------------------------*/
function verticallyCenterResponsiveMenuTitle(rmTitle){
	rmTitle.style.marginTop = "32px";
}

function myFunction(){
  document.getElementsByClassName("menu-primary")[0].style.display = "block";
}
