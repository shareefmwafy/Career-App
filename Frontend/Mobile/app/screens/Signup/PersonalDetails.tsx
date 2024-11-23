import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "../../../assets/styles/SignupStyle";
import { SignUpStackParamList } from "./types";
import axios, { AxiosError } from "axios";
import { ayhamWifiUrl } from "@/constants/Urls";
import Header from "@/components/General Components/Header/Header";
import GenderSelection from "@/components/PersonalInfo/GenderSelection/GenderSelection";
import DateOfBirth from "@/components/PersonalInfo/DateOfBirth/DateOfBirth";
import ButtonGroup from "@/components/General Components/ButtonGroup/ButtonGroup";
import EmailInput from "@/components/PersonalInfo/EmailInput/EmailInput";
type PersonalDetailsProps = NativeStackScreenProps<
  SignUpStackParamList,
  "PersonalDetails"
>;

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  navigation,
  route,
}) => {
  const { firstName, lastName, username } = route.params;
  const [gender, setGender] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(currentDate);
    }
  };

  const handleNext = async () => {
    if (gender && email && dateOfBirth) {
      try {
        const response = await axios.post(`${ayhamWifiUrl}/api/check/email`, {
          email,
        });

        if (response.status === 200) {
          console.log("Done");
          const code = response.data.code;
          console.log(code);
          navigation.navigate("Verification", {
            firstName,
            lastName,
            username,
            gender,
            dateOfBirth,
            email,
            code,
          });
        }
      } catch (error) {
        const err = error as AxiosError;
        if (err.response?.status === 400) {
          alert("Email already exists");
        } else {
          alert("Something went wrong");
        }
      }
    } else {
      alert("Please complete all fields");
    }
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.container}>
        <Header title="Complete Your Profile" />
        <GenderSelection gender={gender} setGender={setGender} />
        <DateOfBirth
          setShowDatePicker={setShowDatePicker}
          dateOfBirth={dateOfBirth}
          showDatePicker={showDatePicker}
          onChange={onChange}
        />
        <Text style={styles.label}>Email:</Text>
        <EmailInput placeholder="Email" email={email} onChangeText={setEmail} />
        <ButtonGroup onPrevious={handlePrevious} onNext={handleNext} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;
