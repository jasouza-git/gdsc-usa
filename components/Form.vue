<script setup lang="ts">
import type { VForm } from 'vuetify/components';

const emit = defineEmits(['update:infos', 'submit'])

enum Gender { male = "Male", female = "Female", other = "Other" }

type FormValue = {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    contactNum: string;
    birthday: string;
    bdayDate: Date;
    address: string;
    universityEmail: string;
    personalEmail: string;
    yearLvl: string;
    membershipStatus: string;
    membershipDescription: string;
    gdscDepartment: string;
};

const values = ref<FormValue>({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: Gender.male,
    contactNum: "",
    birthday: "",
    bdayDate: new Date(`${new Date().getFullYear() - 16}-01-01`),
    address: "",
    universityEmail: "",
    personalEmail: "",
    yearLvl: "1st",
    membershipStatus: "",
    membershipDescription: "",
    gdscDepartment: "N/A"
})

const form = ref<VForm | null>(null);

const submit = async () => {
    if (form.value == undefined) return;
    const { valid } = await form.value?.validate()
    if (valid) {
        emit('submit', values.value);
    }
};

const requireValidate = (t: string, label: string) => {
    if (t === "string") { return (v: string) => !!v || `${label} is required` }
    else { return (v: any) => true }
}

const strLenValidate = (len: number, label: string, less: boolean = true) => {
    return (v: string) => (less ? v?.length <= len : v?.length >= len) || `${label} needs to be ${less ? 'short than' : 'at least'} ${len} characters.`
}

const digitLenValidate = (digitLen: number, label: string) => {
    return (v: string) => new RegExp(`^[0-9-]{${digitLen},}$`).test(v) || `${label} needs to be at least ${digitLen} digits.`
}

const emailValidate = (label: string = "Email", allowEmpty: boolean = false) => {
    return (v: string) => (!v && allowEmpty) ? true : (/.+@.+\..+/.test(v) || `${label} must be valid`)
}

const titles = ["Personal Information", "School Information", "Membership Information"]
const hintGroups = [
    [
        ["First Name", true, "firstName", "4", "text", [strLenValidate(3, "First Name", false)]],
        ["Middle Name", false, "middleName", "4", "text", []],
        ["Last Name", true, "lastName", "4", "text", [strLenValidate(3, "Last Name", false)]],
    ], [
        ["Gender", true, "gender", "4", "selector", [], [Gender.male, Gender.female, Gender.other]],
        ["Contact Number", true, "contactNum", "8", "text", [digitLenValidate(7, "Contact Number")]],
    ], [
        ["Birthday", true, "birthday", "4", "date", [] as ((v: Date) => string | true)[], "bdayDate", [-2524608000, 0]],
        ["Address", true, "address", "8", "text", [strLenValidate(3, "Address", false)]]
    ], [
        ["University Email", false, "universityEmail", "12", "text", [emailValidate("University Email", true)]]
    ], [
        ["Personal Email", true, "personalEmail", "12", "text", [emailValidate("Personal Email")]]
    ], [
        ["Year Level", true, "yearLvl", "4", "selector", [], ["1st", "2nd", "3rd", "4th"]]
    ], [
        ["Status", true, "membershipStatus", "6", "text", []],
        ["Description", true, "membershipDescription", "6", "text", []]
    ], [
        ["GDSC Department", true, "gdscDepartment", "6", "selector", [strLenValidate(3, "GDSC Department", false)], ["Developer Lead", "...", "N/A"]]
    ]
]

</script>

<style setup lang="css">
.v-input__details {
    padding-top: 2px;
    padding-bottom: 1px;
    align-items: start;
    min-height: 10px;
}
.v-messages__message {
    font-size: 10px;
}
.v-text-field .v-field {
    font-size: 12px;
}
.v-label {
    font-size: 12px;
}

.v-field--center-affix .v-label.v-field-label {
    top: 16px
}

.v-input__control {
    height: 32px
}

.v-field__input {
    bottom: -3px;
    position: absolute;
}
</style>
<template>
    <v-card class="px-2 pb-6 pt-3" style="border-radius: 40px;" width="400" elevation="12">
        <v-form @submit.prevent="submit" ref="form">
            <div class="my-0" v-for="(indexes, j) in [[0, 3], [3, 6], [6, 8]]" :key="j">
                <v-card-title class="py-0 mt-0 mb-2" style="font-size: 13px; font-weight: 900; color: black;">{{
                    titles[j] }}</v-card-title>
                <v-row class="my-0 mx-1" v-for="(hints, i) in hintGroups.slice(indexes[0], indexes[1])" :key="i">
                    <v-col class="my-0 pt-0 pb-0 px-2" v-for="(hint, index) in hints" :key="index"
                        :cols="<string>hint[3]">
                        <v-text-field rounded v-if="<string>hint[4] === 'text'" density="compact"
                            :label="<string>hint[0] + (hint[1] ? ' *' : '')" v-model="values[<keyof FormValue>hint[2]]"
                            variant="solo"
                            :rules="(hint[1] ? [requireValidate('string', <string>hint[0])] : []).concat(<Array<(v: any) => string | true>>hint[5])">
                        </v-text-field>
                        <v-select rounded v-else-if="<string>hint[4] === 'selector'" density="compact"
                            :label="<string>hint[0] + (hint[1] ? ' *' : '')"
                            v-model="<any>values[<keyof FormValue>hint[2]]" variant="solo"
                            :items="hint[6] as Array<string>"
                            :rules="(hint[1] ? [requireValidate('string', <string>hint[0])] : []).concat(<Array<(v: any) => string | true>>hint[5])">
                        </v-select>
                        <DateField rounded v-else-if="<string>hint[4] === 'date'" density="compact"
                            :label="<string>hint[0] + (hint[1] ? ' *' : '')"
                            v-model:dateStr="<string>values[<keyof FormValue>hint[2]]"
                            v-model:date="<Date>values[<keyof FormValue>hint[6]]"
                            :min="new Date(Date.parse(new Date().toString()) + (<number[]>hint[7])[0] * 1000)"
                            :max="new Date(Date.parse(new Date().toString()) + (<number[]>hint[7])[1] * 1000)"
                            variant="solo" :rules=" /* @ts-ignore */hint[5]">
                        </DateField>
                    </v-col>
                </v-row>
            </div>
            <v-row class="mt-0">
                <v-btn class="text-none mx-auto bg-red" size="small" color="white" min-width="130" @click="submit"
                    rounded>Apply</v-btn>
            </v-row>
        </v-form>
    </v-card>
</template>
