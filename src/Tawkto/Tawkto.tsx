import { useEffect } from "react";

const TawkToScript = () => {
  useEffect(() => {
    const tawkToScript = document.createElement("script");
    tawkToScript.type = "text/javascript";
    tawkToScript.text = `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/665ae20c981b6c5647772362/1hv9g60lg';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
        `;
    document.body.appendChild(tawkToScript);

    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null;
};

export default TawkToScript;
{
  /* <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/664c8430981b6c564772dd20/1hude8ntv';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script--> */
}
