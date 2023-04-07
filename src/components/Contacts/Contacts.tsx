import {
  View,
  Text,
  FlatList,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, {useEffect, useRef, useState} from "react";

import ReactNativeContacts from "react-native-contacts";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import {dark, light} from "./stylesContacts";
import {useSelector} from "react-redux";

const Contacts = ({onPress}: any) => {
  const [contacts, setContacts] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [displayContacts, setDisplayContacts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const timerRef = useRef<any>();

  const {theme} = useSelector((store: any) => store.theme);

  const styles = theme == "dark" ? dark : light;

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts.",
      buttonPositive: "Please accept bare mortal",
    }).then(() => {
      ReactNativeContacts.getAll()
        .then(contacts => {
          contacts = contacts.filter(e => e.phoneNumbers.length > 0);
          setContacts([...contacts]);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      let filteredContacts = contacts?.filter((e: any) => {
        return e.displayName.toLowerCase().includes(search.toLocaleLowerCase());
      });

      setDisplayContacts([...filteredContacts]);
      setLoading(false);
    }, 1000);
  }, [contacts, search]);

  const renderItem = ({item}: any) => {
    const phoneNumber = item.phoneNumbers[0]?.number;
    const avatar = `https://ui-avatars.com/api/?background=random&name=${item?.displayName
      .split(" ")
      .join("+")}&rounded=true&size=128`;
    return (
      <TouchableOpacity
        style={styles.contactContainer}
        onPress={() => onPress && onPress(phoneNumber)}>
        <Image source={{uri: avatar}} style={styles.image} />
        <View>
          <Text style={styles.contactName}>{item?.displayName}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={30} color="grey" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a contact"
          style={styles.searchInput}
          onSubmitEditing={Keyboard.dismiss}
          placeholderTextColor="grey"
        />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={displayContacts}
          renderItem={renderItem}
          keyExtractor={(_, index) => index + ""}
        />
      )}
    </View>
  );
};

export default Contacts;
