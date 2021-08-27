import { firestore } from "./firebase";

class p_data{
    constructor (end_time, finish_container_count, min_distance_to_person ) {
        this.end_time = end_time;
        this.finish_container_count= finish_container_count;
        this.min_distance_to_person = min_distance_to_person;
    }
    toString() {
        return this.end_time + ', ' + this.finish_container_count + ', ' + this.min_distance_to_person;
    }
}

// Firestore data converter
var p_data_converter = {
    toFirestore: function(p_data) {
        return {
            end_time: pdata.end_time,
            finish_container_count: pdata.finish_container_count,
            min_distance_to_person: pdata.min_distance_to_person
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new p_data(data.end_time, data.finish_container_count, data.min_distance_to_person);
    }
};

db.collection("simulation_data").doc("20210827111213")
  .withConverter(p_data)
  .get().then((doc) => {
    if (doc.exists){
      // Convert to City object
      var city = doc.data();
      // Use a City instance method
      console.log(city.toString());
    } else {
      console.log("No such document!");
    }}).catch((error) => {
      console.log("Error getting document:", error);
    });



export default p_data;
