(function (window) {
    window.env = window.env || {};
    window["env"]["GatewayAPIUrl"] = "${GatewayAPIUrl}";
    window["env"]["WF_Api_Url"] = "${WF_Api_Url}";
    window["env"]["C2MIceAPIUrl"] = "${C2MIceAPIUrl}";
    window["env"]["BaseAPIUrl"] = "${BaseAPIUrl}";
    window["env"]["C2M_Console_API_URL"] = "${C2M_Console_API_URL}";    
    window["env"]["mediaUrl"] = "${mediaUrl}";
    window["env"]["CustomAPIUrl"] = "${CustomAPIUrl}";  
    window["env"]["AppsAdminDomainUrl"] = "${AppsAdminDomainUrl}";
    window["env"]["WF_Api_Url"] = "${WF_Api_Url}";       
    window["env"]["secretCode"] = "${secretCode}";
    window["env"]["raygunAPIKey"] = "${raygunAPIKey}";
    window["env"]["raygunVersion"] = "${raygunVersion}";
})(this);