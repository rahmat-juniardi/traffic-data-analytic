import { Dict } from "../interfaces";
import { Vue, ComponentBase, Prop } from "vue-facing-decorator";

@ComponentBase
export default class BaseField extends Vue {
    @Prop({ type: String, default: "" })
    label!: string;

    @Prop({ default: "text-primary" })
    labelClassName!: string;

    @Prop({ type: String, default: "" })
    placeholder!: string;

    @Prop({ type: Boolean, default: false })
    isHorizontal!: boolean;

    @Prop({ type: String, default: "col-sm-2" })
    formHLeftClassN!: string;

    @Prop({ type: String, default: "col-sm-6" })
    formHRightClassN!: string;

    @Prop({ type: String })
    invalidFeedback?: string;

    @Prop({ type: Boolean })
    required?: boolean;

    @Prop({ type: Boolean })
    disabled?: boolean;

    @Prop({ type: Object })
    inputStyle?: Dict;
}