import { FunctionalComponent } from 'preact';
import { useLocalesStore} from 'stores/LocalesStore';
import { LeftNavigationLayout } from 'layouts/LeftNavigationLayout';
import { Text } from '@project/components/src/ui-kit/Text';


const SettingsPage: FunctionalComponent = () => {
    const { SETTINGS_LANG } = useLocalesStore();

    return (
        <LeftNavigationLayout title={SETTINGS_LANG}>
            <Text text={SETTINGS_LANG} color="help"/>
        </LeftNavigationLayout>
    );
};

export default SettingsPage;