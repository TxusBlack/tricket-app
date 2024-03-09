
const TkShareButton = () => {
    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
      };
    
      const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
      };
    
      const shareOnWhatsApp = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
      };

    return (
        <div>
            <button onClick={shareOnFacebook}>Compartir en Facebook</button>
            <button onClick={shareOnTwitter}>Compartir en Twitter</button>
            <button onClick={shareOnWhatsApp}>Compartir en WhatsApp</button>
        </div>
    )


}


export default TkShareButton;

