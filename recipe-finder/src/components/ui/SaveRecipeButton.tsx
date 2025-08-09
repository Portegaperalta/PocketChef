import { Bookmark } from 'lucide-react';
import { useState } from 'react';

export default function SaveRecipeButton() {
  const [buttonBackground, setButtonBackground] = useState(false)

  const HandleButtonClick = () => {
    setButtonBackground(!buttonBackground)
  }

  return (
    <div
      onClick={HandleButtonClick}
      className={`save-recipe-button cursor-pointer`}>
      <Bookmark color='#F6B100' fill={buttonBackground ? `#F6B100` : `transparent`} />
    </div>
  )
}