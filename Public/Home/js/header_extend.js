function $$(id){
    return document.getElementById(id);
}
_attachEvent($$('header_topic'),'mouseover',function(){
        $$('topic_lists').style.display='block';$$('hd_pop_btn').style.color='#5a5a5a';
        //$$('arrowup').style.marginLeft='40px';
	$$('hd_pop_btn').style.zIndex = 101;
    }
);
_attachEvent($$('header_topic'),'mouseout',function(){
        $$('topic_lists').style.display='none';$$('hd_pop_btn').style.color='#7c7c7c';
//        $$('arrowup').style.marginLeft='0px';
	$$('hd_pop_btn').style.zIndex = 0;
    }
);
_attachEvent($$('header_user_info'),'mouseover',function(){
        $$('header_user_info_box').style.display='block';$$('hd_u_name').style.color='#5a5a5a';
	var subdiv = $$('header_user_info').getElementsByTagName('div');
	for(var i = 0;i<2;i++){
		subdiv[i].style.zIndex = 101;
	}
    }
);
_attachEvent($$('header_user_info'),'mouseout',function(){
        $$('header_user_info_box').style.display='none';$$('hd_u_name').style.color='#7c7c7c';
	var subdiv = $$('header_user_info').getElementsByTagName('div');
	for(var i = 0;i<2;i++){
		subdiv[i].style.zIndex = 0;
	}
    }
);

function setdindex(d){
    if(d==1 || d==2){
        setcookie('dindex', d, 2592000);
    }
}

var miuiheader = {
    init:function(){
        var dindex = getcookie('dindex');
        if(dindex == 1){
            $('s1').setAttribute('class','choose');
        }else if(dindex == 2){
            $('s2').setAttribute('class','choose');
        }else{
            $('s2').setAttribute('class','choose');
        }
    }
}

miuiheader.init();