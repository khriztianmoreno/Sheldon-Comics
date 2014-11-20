/*global Library, $*/


$(function() {
  Sheldon.app = new Sheldon.Router();
});

$( document ).ready(function() {

                var headerAccountWrapper = $("#headerAccount"),
                closeEventAdded = false;

                // Events
                headerAccountWrapper.find("input").on("focus", function() {
                    headerAccountWrapper.addClass("open");

                    if(closeEventAdded) return;

                    $(document).mouseup(function(e) {
                        if (!headerAccountWrapper.is(e.target) && headerAccountWrapper.has(e.target).length === 0) {
                            headerAccountWrapper.removeClass("open");
                        }
                    });

                    closeEventAdded = true;
                });

                $("#headerSignUp").on("click", function(e) {
                    e.preventDefault();
                    headerAccountWrapper.addClass("signup").removeClass("signin").removeClass("recover");
                    headerAccountWrapper.find(".signup-form input:first").focus();
                });

                $("#headerSignIn").on("click", function(e) {
                    e.preventDefault();
                    headerAccountWrapper.addClass("signin").removeClass("signup").removeClass("recover");
                    headerAccountWrapper.find(".signin-form input:first").focus();
                });

                $("#headerRecover").on("click", function(e) {
                    e.preventDefault();
                    headerAccountWrapper.addClass("recover").removeClass("signup").removeClass("signin");
                    headerAccountWrapper.find(".recover-form input:first").focus();
                });

                $("#headerRecoverCancel").on("click", function(e) {
                    e.preventDefault();
                    headerAccountWrapper.addClass("signin").removeClass("signup").removeClass("recover");
                    headerAccountWrapper.find(".signin-form input:first").focus();
                });
            });
