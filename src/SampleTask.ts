import React, { useCallback } from 'react';
import TaskContext,{Task} from './DBScheme';
import { View } from "react-native/types";

const SampleTask = ({_id}) => {
    const {useRealm, useQuery, useObject} = TaskContext;
    const myTask = useObject(Task, _id);
    return (
        <View>
        <Text>Task: {myTask?.description} </Text>
      </View>
    );
  };

  export default SampleTask