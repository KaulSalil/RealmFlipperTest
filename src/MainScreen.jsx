import { Button,
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, useCallback} from "react-native"
    import TaskContext,{Task} from './DBScheme';
    import TaskItem from "./TaskItem";
let realm
function MainScreen(){

  const {useRealm, useQuery, useObject} = TaskContext;
  realm = useRealm()
  const tasks = useQuery(Task);

  //Add task to realm 
//   const handleOnPress = useCallback((description) => {
//     if(!description){
//       return
//     }
//     realm.write(()=>{
//       realm.create('Task',Task.generate(description))
//     })
//   },[realm])
console.log("Tasks:"+JSON.stringify(tasks))
const handleOnPress = (description) => {
console.log('Handle On Press')
    if(!description){
      return
    }
    realm.write(()=>{
      realm.create('Task',Task.generate(description))
    })
}

const deleteData = () =>{
    realm.write(() => {
        // Delete all instances of Cat from the realm.
        realm.delete(realm.objects("Task"));
      });
      
}

//Added function to clear the db 

    return (  
    <View style={{height:100,width:100}}>
    <Button title='Add Task' onPress={()=>handleOnPress("dummy string")}></Button>
    <Button  title="Clear Data" onPress={()=>deleteData()}></Button>
    <FlatList
    style={{height:1000,width:500,backgroundColor:'red'}}
      data={tasks}
      keyExtractor={task => task._id.toString()}
      renderItem={({item}) => (
        <TaskItem
          description={item.description}
          isComplete={item.isComplete}
          
        />
      )}
    />
  </View>)
}

export default MainScreen