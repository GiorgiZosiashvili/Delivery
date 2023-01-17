import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIGNINDATA } from "../../const";
import { Controller, useForm } from "react-hook-form";
import CommonButton from "../../common/CommonButton";

const SignInComp = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
    mode: "onChange",
  });

  const { phoneNumber, password } = watch();
  const onSubmit = (data) => data;
  const isPhone =
    errors?.phoneNumber?.type !== "required" &&
    !!phoneNumber?.length &&
    errors?.phoneNumber?.type !== "minLength";

  const isPassword =
    errors?.password?.type !== "required" &&
    !!password?.length &&
    errors?.password?.type !== "minLength";
  const isActive = isPhone && isPassword;

  return SIGNINDATA.map((item, i) => {
    return (
      <View style={styles.container} key={i}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.newUser_container}>
            <Text style={styles.newUser}>{item.newUser}</Text>
            <CommonButton
              fontFamily={"Regular"}
              height={20}
              textColor={"Secondary2_light"}
              buttonText={"Create an account"}
              fontSize={14}
            />
          </View>
          <Text style={styles.input_title}>{item.phone_option}</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      errors?.phoneNumber?.type === "required" ||
                      errors.phoneNumber
                        ? COLORS.Primary1_dark
                        : !errors.phoneNumber && phoneNumber?.length
                        ? COLORS.Secondary2_dark
                        : COLORS.Neutral5,
                  },
                ]}
                keyboardType="phone-pad"
                placeholder={item.phone_placeHolder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="phoneNumber"
          />
          {errors.phoneNumber && (
            <Text style={styles.invalid}>Invalid input entered</Text>
          )}
          <Text style={styles.input_title}>password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      errors?.password?.type === "required" || errors?.password
                        ? COLORS.Primary1_dark
                        : !errors?.password && password?.length
                        ? COLORS.Secondary2_dark
                        : COLORS.Neutral5,
                  },
                ]}
                secureTextEntry={true}
                placeholder="•••••••••••"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors?.password && (
            <Text style={styles.invalid}>Invalid input entered</Text>
          )}
          <CommonButton
            disabled={!isActive}
            onPress={() => {
              navigation.navigate("Home");
              handleSubmit(onSubmit);
            }}
            backgroundColor={isActive ? "Primary1_light" : "Neutral7"}
            buttonText={"Continue"}
            textColor={isActive ? "Neutral9" : "Neutral4"}
            marginTop={36}
          />
        </View>
        <CommonButton
          backgroundColor={""}
          buttonText={"Reset your password"}
          textColor={"Secondary2_light"}
        />
      </View>
    );
  });
};

export default SignInComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    marginTop: 22,
    marginBottom: 6,
    color: COLORS.Neutral0,
    fontSize: 24,
    fontFamily: "Semibold",
  },
  newUser_container: {
    flexDirection: "row",
    marginBottom: 22,
  },
  newUser: {
    color: COLORS.Neutral3,
    fontSize: 12,
    fontFamily: "Regular",
    lineHeight: 16,
    textAlign: "center",
    marginRight: 4,
  },
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: COLORS.Neutral5,
    fontSize: 14,
    paddingVertical: 10,
    fontFamily: "Regular",
  },
  input_title: {
    color: COLORS.Neutral0,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 16,
    fontFamily: "Regular",
  },
  invalid: {
    fontSize: 12,
    lineHeight: 17,
    color: COLORS.Primary1_light,
    marginTop: 6,
  },
});
