import React from "react"
import  {Stack} from "@chakra-ui/react"
function Checkbox() {
    const [checkedItems, setCheckedItems] = React.useState([false, false])
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    return (
      <>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
       All
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
           Bands
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Barbell
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
             Bench
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Body Only
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Dumbbell
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
           Exercise Ball
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            EZ - Bar
          </Checkbox>


         
        </Stack>
      </>
    )
  }
  export default Checkbox