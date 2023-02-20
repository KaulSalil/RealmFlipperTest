import {Button, FlatList, View} from 'react-native';
import React from 'react';
import TaskContext, {Task} from './DBScheme';
import TaskItem from './TaskItem';
import RealmPlugin from 'realm-flipper-plugin-device';

function MainScreen() {
  const {useRealm, useQuery, RealmProvider} = TaskContext;
  let realm = useRealm();
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
    <RealmProvider>
      <RealmPlugin realms={[realm]} />
      <View style={{height: 100, width: 100}}>
        <Button
          title="Add Task"
          onPress={() => handleOnPress('dummy string')}
        />
        <Button title="Clear Data" onPress={() => deleteData()} />
        <FlatList
          style={{height: 1000, width: 500, backgroundColor: 'red'}}
          data={tasks}
          keyExtractor={task => task._id.toString()}
          renderItem={({item}) => (
            <TaskItem
              description={item.description}
              isComplete={item.isComplete}
            />
          )}
        />
      </View>
    </RealmProvider>
  );
}

export default MainScreen;
