function onClose(){var e={url:"/"};$j.post("/fb_dep_verify_email_address/update_cache",e);for(var t=document.getElementsByClassName("siteHeader__topLine"),n=0;n<t.length;n++)t[n].style.pointerEvents="auto";var i=document.getElementById("modalcontainer");i.style.display="none";var o=document.getElementById("bodycontainer");o.style.opacity="1",o.style.pointerEvents="auto"}function onOk(){var e={url:window.location.href};$j.post("/fb_dep_verify_email_address/update_cache",e),window.location.href="/fb_dep_verify_email_address"}