import { Text, View } from "react-native"

function TaskItem({description,isComplete}){

    return (<View style={{height:100,width:100}}>
        <Text>{description}</Text>
        <Text>{isComplete}</Text>
    </View>)

}

export default TaskItem