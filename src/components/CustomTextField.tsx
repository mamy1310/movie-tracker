import { TextField as MuiTextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const TextField = (props: TextFieldProps) => {
	return (
		<MuiTextField
			variant="outlined"
			required
			fullWidth
			slotProps={{ inputLabel: { shrink: true } }}
			className="custom-textfield"
			{...props}
		/>
	);
};

export default TextField;
