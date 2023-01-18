import React from 'react'
import * as Yup from 'yup'
import { Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { ValidatedTextInput } from '@components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = Yup.object<Record<keyof EditableOrder, Yup.AnySchema>>(
  {
    name: Yup.string().required('Это поле обязательное'),
    customer: Yup.string(),
  },
)

export const OrderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EditableOrder>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      customer: '',
    },
    resolver: yupResolver(validationSchema),
  })

  const saveOrder = (order: EditableOrder) => {}

  return (
    <View style={styles.view}>
      <View>
        <Controller
          name='name'
          control={control}
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Название'
                value={value}
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
              />
            )
          }}
        />

        <Controller
          name='customer'
          control={control}
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => {
            return (
              <ValidatedTextInput
                label='Покупатель'
                value={value}
                error={invalid}
                errorText={error?.message}
                onChangeText={onChange}
              />
            )
          }}
        />
      </View>

      <Button
        mode='contained-tonal'
        disabled={!isValid}
        onPress={handleSubmit(saveOrder)}
      >
        Создать новый заказ
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
