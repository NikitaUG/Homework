let keyFrame = document.querySelector('#key_frame');


function newKeyFrame() {
    keyFrame.innerHTML = `<style>
    @keyframes _red{
        0%  {
            background: linear-gradient(#ff0002, #ff000024);
        }
        ${lenRed}% {
            background: transparent;
        }
        100%  {
            background: transparent;
        }
        }

        @keyframes _yellow{
            0%  {
                background: transparent;
            }
            ${lenRed / 2}%  {
                background: linear-gradient(#fff700, #e4ff0024);
            }  
            ${lenRed}%  {
                background: transparent;
            }
            ${+lenRed + +lenGreen}%  {
                background: linear-gradient(#fff700, #e4ff0024);
            }
            100%  {
                background: linear-gradient(#fff700, #e4ff0024);
            }
        }

        @keyframes _green{
            0%  {
                background: transparent;
            }
            ${lenRed}%  {
                background: linear-gradient(#00ff14, #00ff1426);
            }
            ${lenRed + lenGreen - 20}%  {
                background: transparent;
            }
            ${lenRed + lenGreen - 16.5}%{
                background: linear-gradient(#00ff14, #00ff1426);
            }
            ${lenRed + lenGreen - 13}%{
                background: transparent;
            }
            ${lenRed + lenGreen - 10.5}%{
                background: linear-gradient(#00ff14, #00ff1426);
            }
            ${lenRed + lenGreen - 7}%{
                background: transparent;
            }
            ${lenRed + lenGreen - 3.5}%{
                background: linear-gradient(#00ff14, #00ff1426);
            }
            ${lenRed + lenGreen}%  {
                background: transparent;
            }
            100%  {
                background: transparent;
            }
        }
        
        @keyframes _yellow_default{
            0%  {
                background: linear-gradient(#fff700, #e4ff0024);
            }  
            50%  {
                background: transparent;
            }
        }
    </style>`;
}