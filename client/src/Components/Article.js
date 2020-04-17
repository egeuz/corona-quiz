import React, { useEffect } from 'react'
import axios from 'axios'

function Article({setSearchResults}) {

  useEffect(() => {

    const searchHighlightedText = async (e) => {
      if (e.target.id === "article" && document.getSelection().toString()) {
        try {
          const res = await axios.post(`/highlight-search/`, { query: document.getSelection().toString() })
          const data = res.data;
          console.log(data);
          setSearchResults(data);

        } catch (err) {
          console.log(err);
        }
      }
    }

    document.addEventListener("mouseup", searchHighlightedText)
    return () => {
      document.removeEventListener("mouseup", searchHighlightedText)
    }
  }, [setSearchResults])


  return (
    <div id="article">
      Doggo ipsum puggo fat boi heckin angery woofer, dat tungg tho. Maximum
      borkdrive heckin good boys and girls super chub big ol pupper, tungg mlem.
      Wow very biscit borkf very jealous pupper shoober such treat borkdrive,
      shooberino what a nice floof heck the neighborhood pupper. Corgo the
      neighborhood pupper bork corgo shoob vvv, the neighborhood pupper mlem
      most angery pupper I have ever seen long bois pupperino, super chub heckin
      angery woofer smol borking doggo with a long snoot for pats clouds. Heckin
      lotsa pats heckin woofer pupperino bork, heckin good boys and girls shoob
      heckin good boys shooberino. Long woofer borkf big ol pupper, woofer. Dat
      tungg tho heckin angery woofer pats noodle horse super chub wow such tempt
      waggy wags, aqua doggo heck blop woofer boof, wrinkler maximum borkdrive
      what a nice floof very jealous pupper ur givin me a spook. Borking doggo
      ruff fluffer very jealous pupper what a nice floof boofers, blep long
      woofer long bois very hand that feed shibe long bois, blep big ol he made
      many woofs pupper.
      <br /><br />
    Heckin angery woofer yapper long water shoob I am bekom fat wow such tempt
    puggo, adorable doggo heck clouds. Very good spot what a nice floof waggy
    wags boof fluffer very hand that feed shibe very good spot, pupper big ol
    blep shoober maximum borkdrive. Pupperino very good spot lotsa pats,
    pupper. Dat tungg tho shoober long doggo you are doin me a concern, long
    doggo. Pupperino stop it fren long woofer big ol, smol borking doggo with
    a long snoot for pats I am bekom fat. Heck length boy he made many woofs
    corgo sub woofer, h*ck porgo shibe. Bork porgo ruff dat tungg tho porgo
    pupper you are doing me the shock very good spot clouds, maximum borkdrive
    fat boi shooberino vvv long woofer much ruin diet wrinkler. much ruin
    diet. Blep very taste wow the neighborhood pupper yapper dat tungg tho,
    very jealous pupper borkf thicc. Snoot extremely cuuuuuute mlem boofers
    length boy doggorino, porgo super chub boofers.
      <br /><br />
    Floofs smol borking doggo with a long snoot for pats noodle horse, aqua
    doggo. Most angery pupper I have ever seen fat boi boofers doggorino
    borking doggo, much ruin diet he made many woofs extremely cuuuuuute.
    Extremely cuuuuuute very jealous pupper you are doin me a concern corgo
    smol borking doggo with a long snoot for pats, many pats waggy wags.
    Length boy you are doing me the shock much ruin diet long water shoob
    shoober, clouds smol borking doggo with a long snoot for pats. waggy wags
    most angery pupper I have ever seen. wow very biscit extremely cuuuuuute.
    Noodle horse blep porgo heckin good boys and girls, porgo boof.
    </div>
  )
}

export default Article
