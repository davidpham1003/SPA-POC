package com.adobe.poc.spa.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {TestModel.class, ComponentExporter.class},
        resourceType = TestImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class TestImpl implements TestModel {
    static final String RESOURCE_TYPE = "poc-spa/components/test";

    @ValueMapValue
    private String title;
    
    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getExportedType() {
        return TestImpl.RESOURCE_TYPE;
    }
}
